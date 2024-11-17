import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { ArrowBigRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
    return (
        <TableRow>
        <TableCell>
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" size="xs">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
            </Button>
        </DialogTrigger>
        <OrderDetails />
        </Dialog>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">aaaaaaaaaaaaaaa</TableCell>
        <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
        <TableCell>
            
        </TableCell>
        <TableCell className="font-medium">Gustavo Gantois Caria Carvalho</TableCell>
        <TableCell className="font-medium">R$149,98</TableCell>
        <TableCell>
        <Button variant="outline" size="xs">
            <ArrowBigRight className="mr-2 h-3 w-3" />
            Aprovar
        </Button>
        </TableCell>
        <TableCell>
        <Button variant="ghost" size="xs">
            <X className="h-3 w-3 mr-2" />
            Cancelar
        </Button>
        </TableCell>
    </TableRow>
)
}