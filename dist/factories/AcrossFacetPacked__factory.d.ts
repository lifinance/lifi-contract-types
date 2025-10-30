import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPacked, AcrossFacetPackedInterface } from "../AcrossFacetPacked";
type AcrossFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPacked__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPacked>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPacked;
    connect(signer: Signer): AcrossFacetPacked__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516127ac3803806127ac83398101604081905261002e9161006f565b5f80546001600160a01b0319166001600160a01b039283161790559182166080521660a0526100b9565b6001600160a01b038116811461006c575f5ffd5b50565b5f5f5f60608486031215610081575f5ffd5b835161008c81610058565b602085015190935061009d81610058565b60408501519092506100ae81610058565b809150509250925092565b60805160a0516126af6100fd5f395f8181610c7a0152610e5c01525f818161079101528181610a6701528181610bc101528181610c380152610e2b01526126af5ff3fe6080604052600436106100ef575f3560e01c80637200b82911610087578063b4f3937811610057578063b4f3937814610262578063cf73f711146102aa578063e30c3978146102c9578063f2fde38b146102f5575f5ffd5b80637200b829146101b35780638da5cb5b146101c7578063acc53eb814610217578063ae6c706014610243575f5ffd5b80634c128e60116100c25780634c128e60146101665780634c478642146101795780635a39b10a146101985780635eedcbd6146101a0575f5ffd5b80631458d7ad146100f35780631cf9fd2f146101145780632340ab8f1461014a57806323452b9c14610152575b5f5ffd5b3480156100fe575f5ffd5b5061011261010d366004611abc565b610314565b005b34801561011f575f5ffd5b5061013361012e366004611b37565b610447565b604051610141929190611c07565b60405180910390f35b610112610710565b34801561015d575f5ffd5b5061011261093f565b610112610174366004611d68565b610a08565b348015610184575f5ffd5b50610112610193366004611e19565b610b3b565b610112610c13565b6101126101ae366004611e8a565b610dee565b3480156101be575f5ffd5b50610112610f26565b3480156101d2575f5ffd5b505f546101f29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610141565b348015610222575f5ffd5b50610236610231366004611f14565b61100a565b6040516101419190611f68565b34801561024e575f5ffd5b5061013361025d366004611b37565b61119f565b34801561026d575f5ffd5b506102366040518060400160405280600881526020017fd00dfeeddeadbeef00000000000000000000000000000000000000000000000081525081565b3480156102b5575f5ffd5b506102366102c4366004611f81565b6113e4565b3480156102d4575f5ffd5b506001546101f29073ffffffffffffffffffffffffffffffffffffffff1681565b348015610300575f5ffd5b5061011261030f366004612014565b6114f0565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610364576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff16868660405161038c92919061203b565b5f604051808303815f865af19150503d805f81146103c5576040519150601f19603f3d011682016040523d82523d5f602084013e6103ca565b606091505b50509050801561040c576103df84848461164c565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec1905f90a161043e565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b6104db6040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b61050c60405180608001604052805f60070b81526020015f63ffffffff168152602001606081526020015f81525090565b60908310156105a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e2031343429000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5f6105ae601c8561204a565b90506105be600c60048688612088565b6105c7916120af565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526105f96020600c8688612088565b61060291612115565b60601c60a0840152610618603460208688612088565b61062191612115565b60601c6080840152610637604460348688612088565b6106409161217a565b60801c60c0840152610656604860448688612088565b61065f916121df565b60e090811c90840152610676605060488688612088565b61067f916120af565b60c01d60070b8252610695605460508688612088565b61069e916121df565b60e01c60208301526106b4607460548688612088565b6106bd91612244565b60608301526106cf8160748688612088565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506040830152505b9250929050565b5f61071f603460203684612088565b61072891612115565b60601c90505f61073c604460343684612088565b6107459161217a565b60801c905061076c73ffffffffffffffffffffffffffffffffffffffff831633308461167c565b5f610778601c3661204a565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec336107c46020600c365f612088565b6107cd91612115565b60601c6107de60346020365f612088565b6107e791612115565b60601c856107f960486044365f612088565b610802916121df565b60e01c61081360506048365f612088565b61081c916120af565b60c01c61082d60546050365f612088565b610836916121df565b60e01c610846896074365f612088565b61085460746054365f612088565b61085d91612244565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08c901b16815261089e999897969594939291906004016122c7565b5f604051808303815f87803b1580156108b5575f5ffd5b505af11580156108c7573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506108fd9150600c90506004365f612088565b610906916120af565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461098f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166109de576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b610a2a73ffffffffffffffffffffffffffffffffffffffff8a1633308b61167c565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec3390610aac908a908d908d908c908c908c908c908c908c906004016122c7565b5f604051808303815f87803b158015610ac3575f5ffd5b505af1158015610ad5573d5f5f3e3d5ffd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008d1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a150505050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b8b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b81811015610c0e57610c06838383818110610baa57610baa612355565b9050602002016020810190610bbf9190612014565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61173e565b600101610b8d565b505050565b5f610c1f601c3661204a565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3334610c6c6020600c365f612088565b610c7591612115565b60601c7f000000000000000000000000000000000000000000000000000000000000000034610ca860246020365f612088565b610cb1916121df565b60e01c610cc2602c6024365f612088565b610ccb916120af565b60c01c610cdc6030602c365f612088565b610ce5916121df565b60e01c610cf58a6050365f612088565b610d0360506030365f612088565b610d0c91612244565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610d4d999897969594939291906004016122c7565b5f604051808303818588803b158015610d64575f5ffd5b505af1158015610d76573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350610dae9250600c915060049050365f612088565b610db7916120af565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec33903490610e92908b907f00000000000000000000000000000000000000000000000000000000000000009084908d908d908d908d908d908d90600401612382565b5f604051808303818588803b158015610ea9575f5ffd5b505af1158015610ebb573d5f5f3e3d5ffd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506020019150610f149050565b60405180910390a15050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610f78576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff8711156110a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610599565b6fffffffffffffffffffffffffffffffff881115611140576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e74313238000000000000000000000000000000006064820152608401610599565b632340ab8f60e01b8b8b60601b8b60601b8b60801b8b60e01b8b60c01b8b60e01b895f1b8c8c6040516020016111809b9a999897969594939291906123f0565b60405160208183030381529060405290509a9950505050505050505050565b6112336040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b61126460405180608001604052805f60070b81526020015f63ffffffff168152602001606081526020015f81525090565b606c8310156112f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e203130382900000000000000000000000000000000000000000000006064820152608401610599565b5f611301601c8561204a565b9050611311600c60048688612088565b61131a916120af565b7fffffffffffffffff00000000000000000000000000000000000000000000000016835261134c6020600c8688612088565b61135591612115565b60601c60a084015261136b602460208688612088565b611374916121df565b60e090811c9084015261138b602c60248688612088565b611394916120af565b60c01d60070b82526113aa6030602c8688612088565b6113b3916121df565b60e01c60208301526113c9605060308688612088565b6113d291612244565b60608301526106cf8160508688612088565b606063ffffffff67ffffffffffffffff88161115611484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610599565b6040516114d3907f5a39b10a00000000000000000000000000000000000000000000000000000000908b9060608c901b9060e08c811b9160c08d901b918c901b908b908b908b90602001612553565b604051602081830303815290604052905098975050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611540576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661158d576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036115dc576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff831661167157610c0e828261176a565b610c0e8383836117db565b5f6040517f23b872dd00000000000000000000000000000000000000000000000000000000815284600482015283602482015282604482015260205f6064835f8a5af13d15601f3d1160015f511416171691505080611737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610599565b5050505050565b610c0e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611849565b73ffffffffffffffffffffffffffffffffffffffff82166117b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117d773ffffffffffffffffffffffffffffffffffffffff831682611976565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216611828576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c0e73ffffffffffffffffffffffffffffffffffffffff8416838361198f565b73ffffffffffffffffffffffffffffffffffffffff8416156119705773ffffffffffffffffffffffffffffffffffffffff83166118b2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611925573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119499190612662565b10156119705761197073ffffffffffffffffffffffffffffffffffffffff851684836119d8565b50505050565b5f385f3884865af16117d75763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166119cf576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166119cf575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166119cf57633e3f8f735f526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff81168114611a79575f5ffd5b919050565b5f5f83601f840112611a8e575f5ffd5b50813567ffffffffffffffff811115611aa5575f5ffd5b602083019150836020828501011115610709575f5ffd5b5f5f5f5f5f5f60a08789031215611ad1575f5ffd5b611ada87611a56565b9550602087013567ffffffffffffffff811115611af5575f5ffd5b611b0189828a01611a7e565b9096509450611b14905060408801611a56565b9250611b2260608801611a56565b95989497509295919493608090920135925050565b5f5f60208385031215611b48575f5ffd5b823567ffffffffffffffff811115611b5e575f5ffd5b611b6a85828601611a7e565b90969095509350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b805160070b825263ffffffff60208201511660208301525f604082015160806040850152611bf36080850182611b76565b606093840151949093019390935250919050565b60408152825160408201525f60208401516101406060840152611c2e610180840182611b76565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0848303016080850152611c698282611b76565b9150506060850151611c9360a085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060a085015173ffffffffffffffffffffffffffffffffffffffff811660e08501525060c085015161010084015260e0850151610120840152610100850151611d0361014085018215159052565b5061012085015115156101608401528281036020840152611d248185611bc2565b95945050505050565b803567ffffffffffffffff81168114611a79575f5ffd5b8035600781900b8114611a79575f5ffd5b803563ffffffff81168114611a79575f5ffd5b5f5f5f5f5f5f5f5f5f5f6101208b8d031215611d82575f5ffd5b8a359950611d9260208c01611a56565b985060408b01359750611da760608c01611a56565b9650611db560808c01611d2d565b9550611dc360a08c01611d44565b9450611dd160c08c01611d55565b935060e08b013567ffffffffffffffff811115611dec575f5ffd5b611df88d828e01611a7e565b9b9e9a9d50989b979a96999598949794969561010090950135949350505050565b5f5f60208385031215611e2a575f5ffd5b823567ffffffffffffffff811115611e40575f5ffd5b8301601f81018513611e50575f5ffd5b803567ffffffffffffffff811115611e66575f5ffd5b8560208260051b8401011115611e7a575f5ffd5b6020919091019590945092505050565b5f5f5f5f5f5f5f5f60e0898b031215611ea1575f5ffd5b88359750611eb160208a01611a56565b965060408901359550611ec660608a01611d44565b9450611ed460808a01611d55565b935060a089013567ffffffffffffffff811115611eef575f5ffd5b611efb8b828c01611a7e565b999c989b50969995989497949560c00135949350505050565b5f5f5f5f5f5f5f5f5f5f6101208b8d031215611f2e575f5ffd5b8a359950611f3e60208c01611a56565b9850611f4c60408c01611a56565b975060608b0135965060808b01359550611dc360a08c01611d44565b602081525f611f7a6020830184611b76565b9392505050565b5f5f5f5f5f5f5f5f60e0898b031215611f98575f5ffd5b88359750611fa860208a01611a56565b9650611fb660408a01611d2d565b9550611fc460608a01611d44565b9450611fd260808a01611d55565b935060a0890135925060c089013567ffffffffffffffff811115611ff4575f5ffd5b6120008b828c01611a7e565b999c989b5096995094979396929594505050565b5f60208284031215612024575f5ffd5b611f7a82611a56565b81818437505f910190815290565b818382375f9101908152919050565b81810381811115612082577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f5f85851115612096575f5ffd5b838611156120a2575f5ffd5b5050820193919092039150565b80357fffffffffffffffff000000000000000000000000000000000000000000000000811690600884101561210e577fffffffffffffffff000000000000000000000000000000000000000000000000808560080360031b1b82161691505b5092915050565b80357fffffffffffffffffffffffffffffffffffffffff000000000000000000000000811690601484101561210e577fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808560140360031b1b82161691505092915050565b80357fffffffffffffffffffffffffffffffff00000000000000000000000000000000811690601084101561210e577fffffffffffffffffffffffffffffffff00000000000000000000000000000000808560100360031b1b82161691505092915050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561210e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b80356020831015612082577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8a16815273ffffffffffffffffffffffffffffffffffffffff8916602082015287604082015267ffffffffffffffff871660608201528560070b608082015263ffffffff851660a082015261010060c08201525f61233f61010083018587612280565b90508260e08301529a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff8a16815273ffffffffffffffffffffffffffffffffffffffff891660208201528760408201528660608201528560070b608082015263ffffffff851660a082015261010060c08201525f61233f61010083018587612280565b7fffffffff000000000000000000000000000000000000000000000000000000008c1681527fffffffffffffffff0000000000000000000000000000000000000000000000008b1660048201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a16600c8201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000891660208201527fffffffffffffffffffffffffffffffff00000000000000000000000000000000881660348201527fffffffff00000000000000000000000000000000000000000000000000000000871660448201527fffffffffffffffff000000000000000000000000000000000000000000000000861660488201527fffffffff00000000000000000000000000000000000000000000000000000000851660508201528360548201525f61254260748301848661202d565b9d9c50505050505050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008a1681527fffffffffffffffff000000000000000000000000000000000000000000000000891660048201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008816600c8201527fffffffff00000000000000000000000000000000000000000000000000000000871660208201527fffffffffffffffff000000000000000000000000000000000000000000000000861660248201527fffffffff000000000000000000000000000000000000000000000000000000008516602c820152836030820152818360508301375f910160500190815298975050505050505050565b5f60208284031215612672575f5ffd5b505191905056fea26469706673582212201fe9180cf7f979390d2d5630094fec4309ebca8ab2d90576015d97c8d31aca8664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_REFERRER_DELIMITER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Min";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativeMin";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CallExecutedAndFundsWithdrawn";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPacked;
}
export {};
